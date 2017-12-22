<?php
/**
 * Created by PhpStorm.
 * User: ext-frederic.kim
 * Date: 15/12/2017
 * Time: 11:24
 */

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class SantaController extends Controller
{
    public function draw() {
        $number = mt_rand(0, 100);
        
        return $this->render(
            'santa/draw.html.twig',
            ['number' => $number]
        );
    }
}