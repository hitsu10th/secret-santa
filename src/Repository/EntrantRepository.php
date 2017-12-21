<?php

namespace App\Repository;

use App\Entity\Entrant;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

class EntrantRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Entrant::class);
    }

    public function findByLogin($login)
    {
        return $this->createQueryBuilder('e')
            ->where('e.login = :login')->setParameter('login', $login)
            ->orderBy('e.id', 'ASC')
            ->setMaxResults(1)
            ->getQuery()
            ->getResult()
        ;
    }
}
