<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\Cdpo;

class CDPOController extends Controller
{
    public function index()
    {
        $data = Cdpo::get();
        if (!empty($data)) {
            return response()->json(['status' => true, 'message' => $data, 'code' => 200]);
        } else {
            return response()->json(['status' => false, 'message' => "Error while fetching data", 'code' => 500]);
        }
    }

    public function save(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'agency'        => 'required|string|max:255',
            'district'      => 'required|string|max:255',
            'taluka'        => 'required',
            'office'        => 'required|string|max:255',
            'officer_name'  => 'required|string|max:255',
            'mobile'        => 'required',
            'cdpo_email'    => 'required|string|max:255',
            'address'       => 'required|string',
            'pincode'       => 'required|string',
            'center_id'     => 'required|string|max:255',
            'station_id'    => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => false, 'message' => 'Validation failed', 'errors' => $validator->errors()], 422);
        }
        $data = new Cdpo;
        $data->agency = $request->agency;
        $data->district = $request->district;
        $data->taluka = $request->taluka;
        $data->office = $request->office;
        $data->officer_name = $request->officer_name;
        $data->mobile = $request->mobile;
        $data->cdpo_email = $request->cdpo_email;
        $data->address = $request->address;
        $data->pincode = $request->pincode;
        $data->center_id = $request->center_id;
        $data->station_id = $request->station_id;

        $result = $data->save();
        if ($result) {
            return response()->json(['status' => true, 'message' => "Data saved successfully", 'code' => 200]);
        } else {
            return response()->json(['status' => false, 'message' => "Error while saving the data", 'code' => 500]);
        }
    }

    public function update(Request $request, $id)
    {
        $id = $request->input('id');
        $data = Cdpo::find($id);

        if (!empty($data)) {
            return response()->json(['status' => false, 'message' => "data not found", 'code' => 500]);
        }

        $validator = $request->validate([
            'agency' => 'required|string|max:255',
            'district' => 'required|string|max:255',
            'taluka' => 'required|string|max:255',
            'office' => 'required|string|max:255',
            'officer_name' => 'required|string|max:255',
            'mobile' => 'required',
            'cdpo_email' => 'required|string|max:255',
            'address' => 'required|string',
            'pincode' => 'required|string',
            'center_id' => 'required|string|max:255',
            'station_id' => 'required|string|max:255',
        ]);
        $data->agency = $validator['agency'];
        $data->district = $validator['district'];
        $data->taluka = $validator['taluka'];
        $data->office = $validator['office'];
        $data->officer_name = $validator['officer_name'];
        $data->mobile = $validator['mobile'];
        $data->cdpo_email = $validator['cdpo_email'];
        $data->address = $validator['address'];
        $data->pincode = $validator['pincode'];
        $data->center_id = $validator['center_id'];
        $data->station_id = $validator['station_id'];

        $result = $data->save();
        if ($result) {
            return response()->json(['status' => true, 'message' => "Data updated successfully", 'code' => 200]);
        } else {
            return response()->json(['status' => false, 'message' => "Error while updating data", 'code' => 500]);
        }
    }

    public function delete($id)
    {
        $data = Cdpo::findOrFail($id);
        $data->status = 0;
        $result = $data->save();

        if ($result) {
            return response()->json(['status' => true, 'message' => "Data deleted successfully", 'code' => 200]);
        } else {
            return response()->json(['status' => false, 'mesage' => "Error while delete data", 'code' => 500]);
        }
    }
}
