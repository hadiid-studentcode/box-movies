<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        \App\Models\FilmsModel::factory(5)->create();


        // \App\Models\FilmsModel::factory()->create([
        //     'title' => 'ddd',
        //     'href' =>  'ddd',
        //     'imageSrc'  => 'ddd',
        //     'imageAlt'  => 'ddd',
        //     'description'  => 'ddd',
        //     'release_year' => 'ddd',
        //     'language_id' => 'ddd',
        //     'original_language_id' => 'ddd',
        //     'length' => 'ddd',
        //     'rating' => 'ddd',
        // ]);
    }
}
