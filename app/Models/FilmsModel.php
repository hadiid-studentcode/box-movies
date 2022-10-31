<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
