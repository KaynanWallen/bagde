-- CreateTable
CREATE TABLE "BadgesDemo" (
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "issuedOn" TEXT NOT NULL,
    "recipientIdentify" TEXT NOT NULL,
    "criteriaUrl" TEXT NOT NULL,
    "criteriaNarrative" TEXT NOT NULL,
    "issuerDescription" TEXT NOT NULL,
    "issuerEmail" TEXT NOT NULL,
    "IssuerImageUrl" TEXT NOT NULL,
    "issuerName" TEXT NOT NULL,
    "issuerUrl" TEXT NOT NULL,
    "tags" TEXT[],

    CONSTRAINT "BadgesDemo_pkey" PRIMARY KEY ("uuid")
);
