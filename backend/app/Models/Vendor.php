<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Vendor extends Model
{
    protected $fillable=[
        'vender_name',
        'vender_mobile',
        'vender_email',
        'vender_address',
        'status',
    ];
}
