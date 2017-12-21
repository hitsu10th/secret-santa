<?php

namespace App\Entity;


use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use DateTime;


/**
 * @ORM\Entity(repositoryClass="App\Repository\EntrantRepository")
 */
class Entrant
{
    /**
     * @var integer
     */
    private $id;

    /**
     * @var string
     */
    private $firstname;

    /**
     * @var string
     */
    private $lastname;

    /**
     * @var string
     */
    private $login;

    /**
     * @var DateTime
     */
    private $birthdate;

    /**
     * @var Collection
     */
    private $excluded;

    /**
     * @var self
     */
    private $exclude;

    /**
     * @var Entrant
     */
    private $chosenBy;

    /**
     * @var boolean
     */
    private $hasChosen;

    /**
     * @var DateTime
     */
    private $updatedAt;

    public function __construct()
    {
        $this->excluded = new ArrayCollection();
    }

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return string
     */
    public function getFirstname()
    {
        return $this->firstname;
    }

    /**
     * @param string $firstname
     */
    public function setFirstname($firstname)
    {
        $this->firstname = $firstname;
    }

    /**
     * @return string
     */
    public function getLastname()
    {
        return $this->lastname;
    }

    /**
     * @param string $lastname
     */
    public function setLastname($lastname)
    {
        $this->lastname = $lastname;
    }

    /**
     * @return string
     */
    public function getLogin()
    {
        return $this->login;
    }

    /**
     * @param string $login
     */
    public function setLogin($login)
    {
        $this->login = $login;
    }

    /**
     * @return DateTime
     */
    public function getBirthdate() : DateTime
    {
        return $this->birthdate;
    }

    /**
     * @param DateTime $birthdate
     */
    public function setBirthdate(\DateTime $birthdate)
    {
        $this->birthdate = $birthdate;
    }

    /**
     * Add excluded
     *
     * @param Entrant $entrant
     *
     * @return Entrant
     */
    public function addExcluded(Entrant $entrant): Entrant
    {
        $this->excluded[] = $entrant;

        return $this;
    }

    /**
     * Remove excluded
     *
     * @param Entrant $entrant
     */
    public function removeExcluded(Entrant $entrant)
    {
        $this->excluded->removeElement($entrant);
    }

    /**
     * Get list of Excluded Entrant
     *
     * @return Collection
     */
    public function getExcluded(): Collection
    {
        return $this->excluded;
    }

    /**
     * @return Entrant
     */
    public function getExclude(): Entrant
    {
        return $this->exclude;
    }

    /**
     * @param Entrant $exclude
     */
    public function setExclude(Entrant $exclude)
    {
        $this->exclude = $exclude;
    }

    /**
     * @return Entrant
     */
    public function getChosenBy() : Entrant
    {
        return $this->chosenBy;
    }

    /**
     * @param Entrant $chosenBy
     */
    public function setChosenBy($chosenBy)
    {
        $this->chosenBy = $chosenBy;
    }

    /**
     * @return bool
     */
    public function getHasChosen()
    {
        return $this->hasChosen;
    }

    /**
     * @param bool $hasChosen
     */
    public function setHasChosen($hasChosen)
    {
        $this->hasChosen = $hasChosen;
    }

    /**
     * @return DateTime
     */
    public function getUpdatedAt()
    {
        return $this->updatedAt;
    }

    /**
     * @param DateTime $updatedAt
     */
    public function setUpdatedAt($updatedAt)
    {
        $this->updatedAt = $updatedAt;
    }
}
