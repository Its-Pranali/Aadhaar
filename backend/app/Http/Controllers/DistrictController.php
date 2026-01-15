<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\District;

class DistrictController extends Controller
{
    public function index()
    {
        $data = District::get();
        if (!empty($data)) {
            return response()->json(['status' => true, 'message' => $data, 'code' => 200]);
        } else {
            return response()->json(['status' => false, 'message' => "Error while fetching data"]);
        }
    }

    public function save(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'district' => 'required|string|max:255',
            'status' => 'required|string|max:255',
        ]);
        if ($validator->fails()) {
            return response()->json(['status' => false, 'message' => "Validation fail", 'code' => 500]);
        }
        $data = new District;
        $data->district = $request->district;
        $data->status = $request->status;

        $result = $data->save();
        if ($result) {
            return response()->json(['status' => true, 'message' => "data saved successfully", 'code' => 200]);
        } else {
            return response()->json(['status' => false, 'message' => "Error while saving data", 'code' => 500]);
        }
    }

    public function update(Request $request, $id)
    {
        $data = District::find($id);

        if (empty($data)) {
            return response()->json(['status' => true, 'message' => "data not found", 'code' => 404]);
        }

        $validator = $request->validate([
            'district' => 'required|string|max:255',
            'status' => 'required|string|max:255',
        ]);
        $data->district = $validator['district'];
        $data->status = $validator['status'];
        $result = $data->save();
        if ($result) {
            return response()->json(['status' => true, 'message' => "data updated successfully", 'code' => 200]);
        } else {
            return response()->json(['status' => false, 'message' => "Error while updating data", 'code' => 500]);
        }
    }

    public function delete($id)
    {
        $data = District::findOrFail($id);
        $data->status = 0;
        $result = $data->save();

        if ($result) {
            return response()->json(['status' => true, 'message' => "data deleted successfully", 'code' => 200]);
        } else {
            return response()->json(['status' => false, 'message' => "Error while deleting data", 'code' => 500]);
        }
    }
}
