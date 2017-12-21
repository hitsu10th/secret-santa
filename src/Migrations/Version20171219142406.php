<?php

namespace DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20171219142406 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE entrant (id INT AUTO_INCREMENT NOT NULL, chosen_by INT DEFAULT NULL, excluded INT DEFAULT NULL, firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) NOT NULL, login VARCHAR(255) NOT NULL, birthdate DATE NOT NULL, has_chosen TINYINT(1) NOT NULL, updated_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL, UNIQUE INDEX UNIQ_5E7BAE15E378809F (chosen_by), INDEX IDX_5E7BAE15B16601B3 (excluded), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE entrant ADD CONSTRAINT FK_5E7BAE15E378809F FOREIGN KEY (chosen_by) REFERENCES entrant (id)');
        $this->addSql('ALTER TABLE entrant ADD CONSTRAINT FK_5E7BAE15B16601B3 FOREIGN KEY (excluded) REFERENCES entrant (id)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE entrant DROP FOREIGN KEY FK_5E7BAE15E378809F');
        $this->addSql('ALTER TABLE entrant DROP FOREIGN KEY FK_5E7BAE15B16601B3');
        $this->addSql('DROP TABLE entrant');
    }
}
