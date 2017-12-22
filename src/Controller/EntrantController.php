<?php
/**
 * Created by PhpStorm.
 * User: ext-frederic.kim
 * Date: 15/12/2017
 * Time: 15:40
 */

namespace App\Controller;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
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
        $em = $this->getDoctrine()->getManager();
        $entrant = new Entrant();
        $entrant->setBirthdate(new \DateTime('today'));
        $entrant->setUpdatedAt(new \DateTime('today'));

        foreach($em->getRepository(Entrant::class)->findAll() as $toExclude) {
            $entrant->addExcludedEntrant($toExclude);
        }

        $form = $this->createFormBuilder($entrant)
            ->add('firstname', TextType::class)
            ->add('lastname', TextType::class)
            ->add('login', TextType::class)
            ->add('birthdate', DateTimeType::class, array(
                'required' => false,
                'widget' => 'single_text',
                'format' => 'dd-MM-yyyy')
            )
            ->add('excludedEntrants', EntityType::class, array(
                'class' => Entrant::class,
                'choice_label' => function ($entrant) {return $entrant->getFullname();},
                'multiple' => true)
            )
            ->add('save', SubmitType::class, array(
                'label' => 'Ajouter')
            )
            ->getForm()
        ;

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entrant = $form->getData();

            $em->persist($entrant);
            $em->flush();

            return $this->render('user/saved.html.twig', array(
                'entrant' => $entrant
            ));

        }

        return $this->render('user/create.html.twig', array(
            'form' => $form->createView()
        ));
    }
}
