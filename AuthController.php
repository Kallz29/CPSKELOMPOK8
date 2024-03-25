<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use App\Models\Account;


class AuthController extends Controller
{
    public function login(Request $request){
        $request->validate([
            "email" => "required|string",
            "password" => "required|string",
        ]);
        $accounts = Account::firstWhere("email",$request->email);
        if(!$accounts || !Hash::check($request->password, $accounts->password)){
            return response()->json([
            "message" => "akun tidak ditemukan"
            ],Response::HTTP_NOT_FOUND);
        }
       $token = $accounts->createToken("sanctum_token")->plainTextToken;

        return response()->json([
            "message" => "berhasil log in",
            "token" => $token,
        ],Response::HTTP_OK);
    }
    public function logout(){
        auth()->user()->tokens()->delete();

        return response()->json([
            "message" => "berhasil log out"
        ],Response::HTTP_OK);
    }
}
