import { Request, Response } from 'express';

import {
  createBadgeDemo,
  generateBadge
} from '../config/utils/utils';
import { prisma } from '..';

class BadgeController {
  public generateBadge = async (req: Request, res: Response) => {
    try {
      const registerRecord = await createBadgeDemo(req.body)
      if(!registerRecord){
        res.status(500)
        res.send('Ocorreu um erro ao emitir badge')
        return
      }
  
      const badgeClassRecord = {
        "@context": "https://w3id.org/openbadges/v2",
        "badge": `${process.env.API_URL}/badge/${registerRecord.uuid}`,
        "evidence": [],
        "id": `${process.env.API_URL}/badge-class/${registerRecord.uuid}`,
        "issuedOn": registerRecord.issuedOn,
        "recipient": {
          "type": "email",
          "identity": registerRecord.recipientIdentify,
          "hashed": true
        },
        "type": "Assertion",
        "verification": {
          "type": "hosted"
        }
      }
  
      const buffer = await generateBadge(badgeClassRecord, registerRecord.imageUrl);
  
      res.setHeader('Content-Type', 'image/png');
      res.setHeader('Content-Disposition', 'attachment; filename="badge.png"');
      res.send(buffer);
    } catch (message) {
      res.status(400).json({ statusCode: 400, message });
    }
  }

  public getBadgeClassByUuid = async (req: Request, res: Response) => {
    try {
      const { uuid } = req.params;
  
      const badgeDemoRecord = await prisma.badgesDemo.findUnique({
        where: {
          uuid: uuid
        }
      })
  
      if(!badgeDemoRecord){
        res.status(404)
        res.send({ error: 'Badge não encontrado' })
        return
      }
      
      const formattedBadgeClass = {
        "@context": "https://w3id.org/openbadges/v2",
        "badge": `${process.env.API_URL}/badge/${badgeDemoRecord.uuid}`,
        "evidence": [],
        "id": `${process.env.API_URL}/badge-class/${badgeDemoRecord.uuid}`,
        "issuedOn": "2025-06-01T20:09:31.310Z",
        "recipient": {
          "type": "email",
          "identity": badgeDemoRecord.recipientIdentify,
          "hashed": true
        },
        "type": "Assertion",
        "verification": {
          "type": "hosted"
        }
      }
  
      res.send(formattedBadgeClass)
    } catch (message) {
      res.status(400).json({ statusCode: 400, message });
    }
  }

  public getBadgeByUuid = async(req: Request, res: Response) => {
    try {
      const { uuid } = req.params;
  
      const badgeDemoRecord = await prisma.badgesDemo.findUnique({
        where: {
          uuid: uuid
        }
      })
  
      if(!badgeDemoRecord){
        res.status(404)
        res.send({ error: 'Badge não encontrado' })
        return
      }
      
      const formattedBadge = {
        "@context": "https://w3id.org/openbadges/v2",
        "criteria": {
            "@context": "https://w3id.org/openbadges/v2",
            "id": badgeDemoRecord.criteriaUrl, 
            "narrative": badgeDemoRecord.criteriaNarrative
        },
        "description": badgeDemoRecord.description,
        "id": `${process.env.API_URL}/badge/${badgeDemoRecord.uuid}`,
        "image": {
            "@context": "https://w3id.org/openbadges/v2",
            "id": badgeDemoRecord.imageUrl
        },
        "name": badgeDemoRecord.name,
        "issuer": {
            "@context": "https://w3id.org/openbadges/v2",
            "description": badgeDemoRecord.issuerDescription,
            "email": badgeDemoRecord.issuerEmail,
            "id": `${process.env.API_URL}/issuer/${badgeDemoRecord.uuid}`,
            "image": badgeDemoRecord.IssuerImageUrl,
            "name": badgeDemoRecord.issuerName,
            "type": "Profile",
            "url": badgeDemoRecord.issuerUrl
        },
        "alignment": [],
        "tags": badgeDemoRecord.tags,
        "type": "BadgeClass"
      }
      res.send(formattedBadge)
    } catch (message) {
      res.status(400).json({ statusCode: 400, message });
    }
  }

  public getIssuerByUuid = async(req: Request, res: Response) => {
    try {
      const { uuid } = req.params;
  
      const badgeDemoRecord = await prisma.badgesDemo.findUnique({
        where: {
          uuid: uuid
        }
      })
  
      if(!badgeDemoRecord){
        res.status(404)
        res.send({ error: 'Badge não encontrado' })
        return
      }
      
      const formattedBadge = {
        "@context": "https://w3id.org/openbadges/v2",
        "description": badgeDemoRecord.issuerDescription,
        "email": badgeDemoRecord.issuerEmail,
        "id": `${process.env.API_URL}/issuer/${badgeDemoRecord.uuid}`,
        "image": badgeDemoRecord.IssuerImageUrl,
        "name": badgeDemoRecord.issuerName,
        "type": "Profile",
        "url": badgeDemoRecord.issuerUrl
      }
  
      res.send(formattedBadge)
    } catch (error) {
      console.error('Erro ao buscar badge class:', error);
      res.status(500).send('Erro ao buscar badge class');
    }
  }
}


export default new BadgeController();