<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/',  'App\Http\Controllers\PostsController@index');

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return Inertia\Inertia::render('Index');
})->name('dashboard');
Route::middleware(['auth:sanctum', 'verified'])->get('/posting', function () {
    return Inertia\Inertia::render('Posting');
})->name('posting');

Route::middleware(['auth:sanctum', 'verified'])->get('/drafts', function () {
    return Inertia\Inertia::render('Draft');
})->name('drafts');


Route::resource('/user', 'App\Http\Controllers\UserController');

Route::get('profile', function () {
    return Inertia\Inertia::render('Profile');
});

Route::get('post', 'App\Http\Controllers\PostsController@index');
// Route::get('post/{id}',function(){
//     return Inertia\Inertia::render('PostDetail');
// });
Route::get('post/{id}', 'App\Http\Controllers\PostsController@show');
Route::get('category/{id}', 'App\Http\Controllers\PostsController@category');
