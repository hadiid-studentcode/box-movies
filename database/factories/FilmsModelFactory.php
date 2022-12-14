<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class FilmsModelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {

        $dataFilms = [
            'Avatar.jpg',
            'The SpongeBob Movie Sponge on the Run.jpg',
            'black panter.jpg',
            'dr strange.jpg',
            'spiderman.jpg'
        ];

        $films = [
           1,2,3,4,5

        ];

        $films_random = array_rand($films);

        $data_films_random = array_rand($films,1);


        $rating = [
            1, 2, 3, 4, 5,7,8,9,10

        ];

        $rating_random = array_rand($rating);

        $data_rating_random = array_rand($rating, 1);


        return [
            'title' => fake()->sentence(),
            'href' => "/movies/".$films[$data_films_random],
            'imageSrc' => "/Assets/Images/films/".$dataFilms[$data_films_random],
            'imageAlt' => fake()->sentence(),
            'description' => fake()->paragraph(),
            'release_year'=> 2022,
            'language_id'=> 'silebah indonesia',
            'original_language_id'=> 'english',
            'length'=> '1 jam',
            'rating'=> $rating[$data_rating_random]

            ];
    }
}
