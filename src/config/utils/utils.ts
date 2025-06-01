import extract from 'png-chunks-extract';
import encode from 'png-chunks-encode';
import * as textChunk from 'png-chunk-text';
import * as crypto from 'crypto';
import { prisma } from '../..';

const generateOpenBadgeIdentity = (email: string): string  => {
  const normalizedEmail = email.trim().toLowerCase();
  const hash = crypto.createHash('sha256').update(normalizedEmail).digest('hex');

  return `sha256$${hash}`;
}

export const generateBadge = async (badge_class: any, imageUrl: string) => {
  const response = await fetch(imageUrl);
  if (!response.ok) {
    throw new Error(`Erro ao baixar imagem: ${response.statusText}`);
  }

  const pngBuffer = Buffer.from(await response.arrayBuffer());
  const chunks = extract(pngBuffer);
  const badgeChunk = textChunk.encode('openbadges', JSON.stringify(badge_class));

  const newChunks = [
    ...chunks.slice(0, -1),
    badgeChunk,
    chunks[chunks.length - 1], // IEND
  ];

  const outputBuffer = Buffer.from(encode(newChunks));
  return outputBuffer
}

export const createBadgeDemo = async (badge: any) => {
  try {
    const createRecord = await prisma.badgesDemo.create({
      data: {
        name: badge.name,
        description: badge.description,
        issuedOn: new Date().toISOString(),
        recipientIdentify: generateOpenBadgeIdentity(badge.recipientIdentify),
        criteriaUrl: badge.criteriaUrl,
        criteriaNarrative: badge.criteriaNarrative,
        issuerDescription: badge.issuerDescription,
        issuerEmail: badge.issuerEmail,
        IssuerImageUrl: badge.IssuerImageUrl,
        issuerName: badge.issuerName,
        issuerUrl: badge.issuerUrl,
        imageUrl: badge.imageUrl,
        tags: badge.tags,
      }
    })

    return createRecord
  } catch (error) {
    console.error('Erro ao criar badge:', error);
  }
}