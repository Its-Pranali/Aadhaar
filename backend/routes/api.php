<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CenterController;
use App\Http\Controllers\CDPOController;

Route::post('/center-details/save', [CenterController::class, 'save']);
Route::get('/center-details/list', [CenterController::class, 'index']);

Route::get('/cdpo-details/list', [CDPOController::class, 'index']);
Route::post('/cdpo-details/save', [CDPOController::class, 'save']);
Route::put('/cdpo-details/{id}', [CDPOController::class, 'update']);
// Route::delete('/cdpo-details/{id}', [CDPOController::class, 'delete']);
