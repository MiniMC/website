<?php

use App\Http\Controllers\LinkController;
use App\Http\Controllers\MeController;
use App\Http\Controllers\ProfileController;
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

Route::get('/api/user', [ProfileController::class, 'index'])->middleware(['auth']);
Route::get('/api/linked', [ProfileController::class, 'checkIfLinked'])->middleware(['auth']);

Route::get('/link', [LinkController::class, 'index'])->middleware(['auth']);

Route::view('/{path?}', 'app')
    ->where('path', '.*');
