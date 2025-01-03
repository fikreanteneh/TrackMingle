import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class SupabaseConfig {
  static Future<SupabaseClient> initialize() async {
    var supabaseUrl = dotenv.env['SUPABASE_URL'];
    var supabaseKey = dotenv.env['SUPABASE_KEY'];
    var c = await Supabase.initialize(
      url: supabaseUrl as String,
      anonKey: supabaseKey as String,
    );
    return c.client;
  }
}
