<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CenterController;
use App\Http\Controllers\CDPOController;
use App\Http\Controllers\DistrictController;
use App\Http\Controllers\TalukaController;
use App\Http\controller\VandorController;

Route::post('/center-details/save', [CenterController::class, 'save']);
Route::get('/center-details/list', [CenterController::class, 'index']);

Route::get('/cdpo-details/list', [CDPOController::class, 'index']);
Route::post('/cdpo-details/save', [CDPOController::class, 'save']);
Route::put('/cdpo-details/{id}', [CDPOController::class, 'update']);
// Route::delete('/cdpo-details/{id}', [CDPOController::class, 'delete']);

Route::get('/district/list', [DistrictController::class, 'index']);
Route::post('/district/save', [DistrictController::class, 'save']);
Route::put('/district/{id}', [DistrictController::class, 'update']);
Route::delete('/district/{id}', [DistrictController::class, 'delete']);

Route::get('/taluka/list', [TalukaController::class, 'index']);
Route::get('/taluka/getDistrict', [TalukaController::class, 'getDistrict']);
Route::post('/taluka/save', [TalukaController::class, 'save']);
Route::put('/taluka/{id}', [TalukaController::class, 'update']);
Route::delete('/taluka/{id}', [TalukaController::class, 'delete']);

Route::get('/vandor/list',[VandorController::class,'index']);
Route::post('/vandor/save',[VandorController::class,'save']);
Route::put('/vandor/{id}',[VandorController::class,'update']);