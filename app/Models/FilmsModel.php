<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class FilmsModel extends Model
{
    use HasFactory;
    protected $table = 'db_films';
    protected $primaryKey = 'id';

    protected $fillable = [
        'title',
        'href',
        'imageSrc',
        'imageAlt',
        'description',
        'release_year',
        'language_id',
        'original_language_id',
        'length',
        'rating'
    ];

    public function Films(){

        // $films = FilmsModel::all();

        $films = DB::table('db_films')
            ->where('id', '<=', 8)
            ->get();

        return $films;
    }
}
