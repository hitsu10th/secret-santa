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
     * @var array
     */
    private $excludedEntrants;

    /**
     * @var Entrant
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

    /**
     * Entrant constructor.
     */
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
    public function getFullname() : string
    {
        return $this->firstname . ' ' . $this->lastname;
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
     * Add excluded Entrant
     *
     * @param Entrant $entrant
     *
     * @return Entrant
     */
    public function addExcludedEntrant(Entrant $entrant): Entrant
    {
        $this->excludedEntrants[] = $entrant;

        return $this;
    }

    /**
     * Remove excluded Entrant
     *
     * @param Entrant $entrant
     */
    public function removeExcludedEntrant(Entrant $entrant)
    {
        $this->excludedEntrants->removeElement($entrant);
    }

    /**
     * Get list of Excluded Entrant
     *
     * @return array
     */
    public function getExcludedEntrants(): array
    {
        return $this->excludedEntrants;
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
