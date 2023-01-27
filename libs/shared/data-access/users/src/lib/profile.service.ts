import { Injectable } from '@angular/core';
import {SupabaseService} from "@setbrain-dashboard/shared/data-access/database";
import { Profile } from './interfaces/profile.interface';
import {AuthChangeEvent, AuthSession, Session} from "@supabase/supabase-js";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  _session: AuthSession | null = null;
  profile: Profile | undefined;

  constructor(private supabaseService: SupabaseService) {}

  async getSession() {
    return await this.supabaseService.auth.getSession();
  }

  async getprofile() {
    const { session } = (await this.getSession()).data;
    const {data} = await this.supabaseService.supabase
      .from('profiles')
      .select(`id, lastname, firstname, email, avatar_url`)
      .eq('id', session?.user.id)
      .single();
    if(data != null) {
      this.profile = data as Profile;
    }
    return data as Profile;
  }

  authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
    return this.supabaseService.auth.onAuthStateChange(callback);
  }

  async updateProfile(profile: Profile) {
    const { session } = (await this.getSession()).data;
    const update = {
      ...profile,
      id: session?.user?.id,
      updated_at: new Date(),
    };

    return this.supabaseService.supabase.from('profiles').upsert(update);
  }

  downLoadImage(path: string) {
    return this.supabaseService.supabase.storage.from('avatars').download(path);
  }

  uploadAvatar(filePath: string, file: File) {
    return this.supabaseService.supabase.storage.from('avatars').upload(filePath, file);
  }

  async updateAuth() {
    const {data, error} = await this.supabaseService.auth.refreshSession();
    return {data, error};
  }

  signOut() {
    this.supabaseService.auth.signOut();
  }
}
