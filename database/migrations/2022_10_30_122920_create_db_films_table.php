<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('db_films', function (Blueprint $table) {
            $table->id();
            $table->string('title',100);
            $table->string('href');
            $table->string('imageSrc');
            $table->string('imageAlt',100);
            $table->text('description');
            $table->string('release_year');
            $table->string('language_id',100);
            $table->string('original_language_id',100);
            $table->string('length',100);
            $table->string('rating',100);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('db_films');
    }
};
