
import React from 'react';
import { Sparkles, Zap, ShieldCheck, Globe, Rocket, Landmark } from 'lucide-react';
import { Entity, Value } from './types';

export const ENTITIES: Entity[] = [
  {
    id: 'strato-events',
    name: 'Strato Events',
    description: 'Ingénierie événementielle de prestige et expériences immersives sur-mesure.',
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    id: 'strato-fx',
    name: 'Strato FX',
    description: 'Laboratoire de création visuelle et effets spéciaux de nouvelle génération.',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    id: 'strato-telecom',
    name: 'Strato x Telecom',
    description: 'Infrastructures de communication sécurisées et réseaux haute altitude.',
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    id: 'strato-zone',
    name: 'Strato Zone',
    description: 'Gestion stratégique d\'actifs immobiliers et zones d\'innovation.',
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    id: 'strato-global',
    name: 'Strato Global Business',
    description: 'Conseil en expansion internationale et architecture de marchés.',
    icon: <Globe className="w-6 h-6" />,
  },
  {
    id: 'strato-clubs',
    name: 'Clubs Stratosphères',
    description: 'Cénacles de réflexion et incubateurs de talents d\'exception.',
    icon: <Landmark className="w-6 h-6" />,
  },
];

export const VALUES: Value[] = [
  { title: 'Élévation', description: 'Dépasser les frontières conventionnelles pour atteindre l\'excellence absolue.' },
  { title: 'Convergence', description: 'Unifier les talents et les technologies vers un but commun unique.' },
  { title: 'Discipline', description: 'La rigueur architecturale comme fondement de chaque réussite.' },
  { title: 'Grandeur', description: 'Penser et agir à l\'échelle de l\'histoire et de la vision.' },
  { title: 'Leadership', description: 'Inspirer le futur par une maîtrise visionnaire du présent.' },
];
