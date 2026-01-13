<?php


if (!function_exists("agency")) {
    function agency($key = null)
    {
        $agency = array(
            '1' => "Women & Child Development Department",
            '2'  => "School & Education Department",
        );
        // return $talukaStatus;
        return isset($agency[$key]) ? $agency[$key] : $agency;
    }
}


