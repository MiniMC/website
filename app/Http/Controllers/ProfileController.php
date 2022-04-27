<?php

namespace App\Http\Controllers;

use App\Models\Players;
use App\Models\Thewalls;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = array();
        $data['user'] = (Auth::user()) ? User::where('id', Auth::user()->id)->first() : false;
        $data['player'] = Players::where('discord_id', Auth::user()->id)->first();
        $data['thewalls'] = Thewalls::where('uuid', $data['player']->uuid)->first();
        return response()->json($data);
    }

    public function checkIfLinked() 
    {
        $player = Players::where('discord_id', Auth::user()->id)->first();
        if ($player != null) {
            return response()->json("Minecraft Linked!");
        } else {
            return response()->json("Minecraft Not Linked!");
        }
    }
}