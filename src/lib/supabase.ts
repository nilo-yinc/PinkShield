import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          avatar_url: string | null;
          date_of_birth: string | null;
          phone: string | null;
          emergency_contact: string | null;
          medical_history: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          avatar_url?: string | null;
          date_of_birth?: string | null;
          phone?: string | null;
          emergency_contact?: string | null;
          medical_history?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          avatar_url?: string | null;
          date_of_birth?: string | null;
          phone?: string | null;
          emergency_contact?: string | null;
          medical_history?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      symptom_logs: {
        Row: {
          id: string;
          user_id: string;
          symptoms: string[];
          severity: number;
          notes: string | null;
          ai_response: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          symptoms: string[];
          severity: number;
          notes?: string | null;
          ai_response?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          symptoms?: string[];
          severity?: number;
          notes?: string | null;
          ai_response?: string | null;
          created_at?: string;
        };
      };
      appointments: {
        Row: {
          id: string;
          user_id: string;
          doctor_name: string;
          appointment_type: string;
          date: string;
          time: string;
          status: 'scheduled' | 'completed' | 'cancelled';
          notes: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          doctor_name: string;
          appointment_type: string;
          date: string;
          time: string;
          status?: 'scheduled' | 'completed' | 'cancelled';
          notes?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          doctor_name?: string;
          appointment_type?: string;
          date?: string;
          time?: string;
          status?: 'scheduled' | 'completed' | 'cancelled';
          notes?: string | null;
          created_at?: string;
        };
      };
      community_posts: {
        Row: {
          id: string;
          user_id: string;
          title: string;
          content: string;
          category: string;
          likes: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          title: string;
          content: string;
          category: string;
          likes?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          title?: string;
          content?: string;
          category?: string;
          likes?: number;
          created_at?: string;
        };
      };
    };
  };
};