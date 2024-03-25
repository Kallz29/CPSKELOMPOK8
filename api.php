<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AccountController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::get("/accounts",[AccountController::class,"index"]);
Route::post("/accounts",[AccountController::class,"store"]);
Route::put("/accounts/{id}",[AccountController::class,"update"]);
Route::get("/accounts/{id}",[AccountController::class,"show"]);
Route::delete("/accounts/{id}",[AccountController::class,"destroy"]);
Route::get("/accounts/check-email", [AccountController::class, "checkEmail"]);

Route::post("/auth/login", [AuthController::class,"login"]);
Route::middleware("auth:sanctum")->post("/auth/logout", [AuthController::class,"logout"]);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
