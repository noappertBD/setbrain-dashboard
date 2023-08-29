import { SupabaseClient } from '@supabase/supabase-js';
import { Database } from 'types/database';

export const createArticle = (
    projectId: string,
    supabase: SupabaseClient<Database>
) => {
    return supabase
        .from('articles')
        .insert({ project_id: projectId })
        .select('*')
        .single();
};

export const getArticleById = (
    articleId: string,
    supabase: SupabaseClient<Database>
) => {
    return supabase.from('articles').select('*').eq('id', articleId).single();
};