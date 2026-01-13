<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cdpo extends Model
{
    protected $fillable = [
        'agency',
        'district',
        'taluka',
        'office',
        'officer_name',
        'mobile',
        'cdpo_email',
        'address',
        'pincode',
        'center_id',
        'station_id',
    ];
}
