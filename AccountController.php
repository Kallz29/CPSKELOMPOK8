<?php

namespace App\Http\Controllers;

use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Account;
use Illuminate\Support\Facades\Validator;

class AccountController extends Controller
{
    public function index(){
        $accounts = Account::all();

        return response()->json([
            "message" => "sukses fetch akun",
            "data" => $accounts
        ],Response::HTTP_OK);

    }
    public function store(Request $request){
        $validator = Validator::make($request->all(),[
            "nama" => "required|string",
            "email" => "required|string|email:rfc,dns|unique:accounts,email",
            "password" => "required|string",
            "nohp" => "required|string"
        ]);
    
        if ($validator->fails()){
            return response()->json([
                "message" => "gagal membuat akun baru",
                "errors" => $validator->errors()
            ],Response::HTTP_NOT_ACCEPTABLE);
        }
    
        $validated = $validator->validated();
        $validated["password"] = bcrypt($validated["password"]);
    
        try {
            $createdAccount = Account::create($validated);
            
            return response()->json([
                "message" => "berhasil membuat akun baru"
            ], Response::HTTP_CREATED);
        } catch (QueryException $e) {
            if ($e->errorInfo[1] === 1062) { // MySQL duplicate entry error code
                return response()->json([
                    "message" => "gagal membuat akun baru",
                    "error" => "Email sudah terdaftar, mohon gunakan email yang lain."
                ], Response::HTTP_CONFLICT);
            }
    
            return response()->json([
                "message" => "gagal membuat akun baru",
                "error" => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
        public function update(Request $request, $id){
            $validator = Validator::make($request->all(),[
                "nama" => "string",
                "email" => "string|email:rfc,dns|unique:accounts,email",
                "password" => "string",
                "nohp" => "string"
            ]);
    
            if ($validator->fails()){
                return response()->json([
                    "message" => "gagal membuat akun baru",
                    "errors" => $validator->errors()
                ],Response::HTTP_NOT_ACCEPTABLE);
            }
    
            $validated = $validator->validated();
            if(isset($validated["password"]))
            $validated["password"] = bcrypt($validated["password"]);

            try {
                $accounts = Account::findOrFail($id);
                $accounts->update($validated);
            } catch (Exception $e) {
                return response()->json([
                    "message" => "gagal membuat akun baru",
                    "error" => $e->getMessage()
                ],);
            }
            return response()->json([
                "message" => "berhasil memperbarui akun",
                "data" => $accounts
            ],);
        }
        public function show($id){
            $accounts = Account::findOrFail($id);
            return response()->json([
                "message" => "berhasil menampilkan akun",
                "data" => $accounts
            ],);
        }
        public function destroy($id){
            $accounts = Account::findOrFail($id);
            $accounts->delete();
            return response()->json([
                "message" => "berhasil menghapus akun dengan id",
                "data" => $accounts
            ],);
        }
        public function checkEmail(Request $request) {
            $validator = Validator::make($request->all(), [
                'email' => 'required|email:rfc,dns'
            ]);
        
            if ($validator->fails()) {
                return response()->json([
                    'error' => $validator->errors()->first('email')
                ], Response::HTTP_BAD_REQUEST);
            }
        
            $emailExists = Account::where('email', $request->input('email'))->exists();
        
            return response()->json([
                'exists' => $emailExists
            ], Response::HTTP_OK);
        }
        
    }
    

