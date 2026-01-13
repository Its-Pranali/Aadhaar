<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cdpos', function (Blueprint $table) {
            $table->id();
            $table->string('agency', 255);
            $table->string('district', 255);
            $table->string('taluka', 255);
            $table->string('office', 255);
            $table->string('officer_name', 255);
            $table->string('mobile', 10);
            $table->string('cdpo_email')->unique();
            $table->string('address', 255);
            $table->string('pincode',10);
            $table->string('center_id', 255);
            $table->string('station_id', 255);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cdpos');
    }
};
