<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\District;

class DistrictController extends Controller
{
    public function index(){
        $data=District::get();
        if(!empty($data)){
            return response()->json(['status'=>true,'message'=>$data,'code'=>200]);
        }
        else{
            return response()->json(['status'=>false,'message'=>"Error while fetching data"]);
        }
    }

    public function save(Request $request){
        $validator=Validator::make($request->all(),[
            'district'=>'required|string|max:255',
            'status'=>'required|string|max:255',
        ]);
        if($validator->fails()){
            return response()->json(['status'=>false,'message'=>"Validation fail",'code'=>500]);
        }
        $data=new District;
        $data->district=$request->district;
        $data->status=$request->status;

        $result=$data->save();
        if($result){
            return response()->json(['status'=>true,'message'=>"data saved successfully",'code'=>200]);
        }
        else{
            return response()->json(['status'=>false,'message'=>"Error while saving data",'code'=>500]);
        }
    }
}
