<?php
/**
 * Created by PhpStorm.
 * User: ext-frederic.kim
 * Date: 15/12/2017
 * Time: 15:40
 */

namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use App\Repository\EntrantRepository;
use App\Entity\Entrant;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\HttpFoundation\Request;

class EntrantController extends Controller
{
    public function create(Request $request) {
        $entrant = new Entrant();
        $entrant->setBirthdate(new \DateTime('today'));

        $form = $this->createFormBuilder($entrant)
            ->add('firstname', TextType::class)
            ->add('lastname', TextType::class)
            ->add('login', TextType::class)
            ->add('birthdate', DateTimeType::class, array('required' => false, 'widget' => 'single_text', 'format' => 'dd-MM-yyyy'))
            ->add('save', SubmitType::class, array('label' => 'Ajouter'))
            ->getForm()
        ;

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $entrant = $form->getData();

            $em->persist($entrant);
            $em->flush();

            return $this->redirectToRoute('entrant_saved');

        }

        return $this->render('user/create.html.twig', array(
            'form' => $form->createView()
        ));
    }

    public function saved() {
        return '<html>
        <head>
            coucou
        </head>
        <body>
            Enregistré
        </body>
        </html>';
    }
}
