<?php
/**
 * Created by PhpStorm.
 * User: ext-frederic.kim
 * Date: 15/12/2017
 * Time: 11:24
 */

namespace App\Controller;

use App\Entity\Entrant;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class SantaController extends Controller
{
    public function draw() {
        $em = $this->getDoctrine()->getManager();
        //$login = $this->getParameter('login');
        //$birthdate = $this->getParameter('birthdate');
        //$password = $this->getParameter('password');

        /*$entrant = $em->getRepository(Entrant::class)
            ->findOneBy(array(
                'login' => $login,
                'birthdate' => $birthdate,
            )
        );*/
        $entrant = $em->getRepository(Entrant::class)->findByLogin('fred2');
dump($entrant); exit;
        if (!$entrant) {
            throw new NotFoundHttpException('Not found : try again');
        }



        $number = mt_rand(0, 100);
        
        return $this->render(
            'santa/draw.html.twig',
            ['number' => $number]
        );
    }
}