<?php

use App\Models\FilmsModel;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/movies', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');



Route::get('/', function () {

    $result = new FilmsModel();
    $films = $result->Films();

    return Inertia::render('Welcome',[
        'title'=> 'Welcome',
        'films'=> $films
    ]);
});
Route::get('/movies', function () {
    return Inertia::render('Movies',[
        'title' => 'Movies'
    ]);
});

require __DIR__.'/auth.php';
