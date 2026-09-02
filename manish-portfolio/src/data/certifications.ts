/**
 * CERTIFICATIONS DATA
 * Manish Vidhya Narayanan | AI & Data Science Portfolio
 * 
 * Professional certifications and course completions
 */

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate?: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  description?: string;
  image?: string;
  order: number;
}

// Verified certifications only - add as they are obtained
export const certifications: Certification[] = [];

export const getCertificationById = (id: string) =>
  certifications.find(cert => cert.id === id);

export const getActiveCertifications = () => {
  const now = new Date();
  return certifications.filter(cert => {
    if (!cert.expiryDate) return true;
    return new Date(cert.expiryDate) > now;
  });
};
