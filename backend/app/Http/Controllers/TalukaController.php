<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Taluka;
use App\Models\District;

class TalukaController extends Controller
{
    public function index()
    {
        $data = DB::table('talukas')
            ->join('districts as d', 'd.id', '=', 'talukas.district')
            ->select(
                'talukas.id',
                 'talukas.district as district_id', 
                'talukas.taluka',
                'talukas.status',
                'd.district as district_name',
            )
            ->get();
        if (!empty($data)) {
            return response()->json(['status' => true, 'message' => $data, 'code' => 200]);
        } else {
            return response()->json(['status' => false, 'message' => "Error while fetching taluka", 'code' => 500]);
        }
    }

    public function getDistrict()
    {
        $data = District::get();
        if (!empty($data)) {
            return response()->json(['status' => true, 'message' => $data, 'code' => 200]);
        } else {
            return response()->json(['status' => false, 'message' => "Error while fetching district", 'code' => 500]);
        }
    }

    public function save(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'district' => 'required',
            'taluka' => 'required|string|max:255',
            'status' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => false, 'message' => "Validation Fails", 'code' => 500]);
        }
        $data = new Taluka;
        $data->district = $request->district;
        $data->taluka = $request->taluka;
        $data->status = $request->status;

        $result = $data->save();
        if ($result) {
            return response()->json(['status' => true, 'message' => "Data saved successfully", 'code' => 200]);
        } else {
            return response()->json(['status' => false, 'message' => "Error while saving data", 'code' => 500]);
        }
    }

    public function update(Request $request, $id)
    {
        $data = Taluka::find($id);
        if (!$data) {
            return response()->json(['status' => false, 'message' => "Data not found", 'code' => 200]);
        }

        $validator = $request->validate([
            'district' => 'required',
            'taluka' => 'required|string|max:255',
            'status' => 'required|string|max:255',
        ]);

        $data->district = $validator['district'];
        $data->taluka = $validator['taluka'];
        $data->status = $validator['status'];

        $result = $data->save();
        if ($result) {
            return response()->json(['status' => true, 'message' => "Data updated successfully", 'code' => 200]);
        } else {
            return response()->json(['status' => false, 'message' => "Error while updating data", 'code' => 500]);
        }
    }

    public function delete($id)
    {
        $data = Taluka::findOrFail($id);
        $data->status = 0;
        $result = $data->save();
        if ($result) {
            return response()->json(['status' => true, 'message' => "Data deleted successfully", 'code' => 200]);
        } else {
            return response()->json(['status' => false, 'message' => "Error while deleting data", 'code' => 500]);
        }
    }
}
