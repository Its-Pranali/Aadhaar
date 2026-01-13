<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Center extends Model
{
    protected $fillable=[
        'agency',
        'state',
        'district',
        'taluka',
        'center_code',
        'status',
        'allocate_status',
    ];
}
