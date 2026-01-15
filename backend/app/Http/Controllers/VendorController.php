<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\Vendor;

class VendorController extends Controller
{
    public function index()
    {
        $data = Vendor::get();
        if (!empty($data)) {
            return response()->json(['status' => true, 'message' => $data, 'code' => 200]);
        } else {
            return response()->json(['status' => false, 'message' => "Error while fetching data", 'code' => 500]);
        }
    }

    public function save(Request $request){
        $validator =Validator::make($request->all(),[
            'vandor_name'=>'required|string|max:255',
            'vendor_mobile'=>'required|string|max:255',
            'vandor_email'=>'required|string|max:255',
            'vandor_address'=>'required|string|max:255',
            'status'=>'required|string|max:255',
        ]);

        if($validators->fails()){
            return response()->json(['status'=>false,'message'=>"Validation Failed",'code'=>500]);
        }
        $data=new Vendor;
        $data->vandor_name=$request->vandor_name;
        $data->vandor_mobile=$request->vandor_mobile;
        $data->vandor_email=$request->vandor_email;
        $data->vandor_address=$request->vandor_address;
        $data->status=$request->status;

        $result=$data->save();
        if($result){
            return response()->json(['status'=>true,'message'=>"data saved successfully",'code'=>200]);
        }
        else{
            return response()->json(['status'=>false,'message'=>"Error while saving",'code'=>500]);
        }
    }

    public function update(Request $request,$id){
        $data=Validator::find($id);
        if(!empty($data)){
            return response()->json(['status'=>false,'message'=>"data not found",'code'=>500]);
        }
        $validator=$request->validate([
            'vandor_name'=>'required|string|max:255',
            'vandor_mobile'=>'required|string|max:255',
            'vandor_email'=>'required|string|max:255',
            'vandor_address'=>'required|string|max:255',
            'status'=>'required|string|max:255',
        ]);

        $data->validator_name=>$validator['vandor_name'];
        $data->validator_mobile=>$validator['vandor_mobile'];
        $data->validator_email=>$validator['vandor_email'];
        $data->validator_address=>$validator['vandor_address'];
        $data->status=>$validator['status'];

        $result=$data->save();
        if($result){
            return response()->json(['status'=>true,'message'=>"Data updated successfully",'code'=>200]);
        }
        else{
            return response()->json(['status'=>false,'message'=>"Error while updating data",'code'=>500]);
        }
    }
}
