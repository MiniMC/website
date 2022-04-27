<?php

namespace App\Http\Controllers;

use App\Models\Players;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class LinkController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->query('code') != null) {
            $code = $request->query('code');
            $reverted = ""; 
            $length = strlen($code);  
            for ($i=($length-1) ; $i >= 0 ; $i--)   
            {  
                $reverted = $reverted . $code[$i];  
            }  
            $newstr = substr_replace(substr_replace(substr_replace(substr_replace($reverted, "-", 8, 0), "-", 13, 0), "-", 18, 0), "-", 23, 0);

            $player = Players::where('uuid', $newstr)->first();

            $player->discord_id = Auth::user()->id;
            $player->discord_username = Auth::user()->username . "#" . Auth::user()->discriminator;
            $player->save();
            return Redirect::intended("/linked");
        } else {
            return view('app');
        }
    }
}