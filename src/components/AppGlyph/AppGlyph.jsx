import {
  Briefcase24Filled,
  Certificate24Filled,
  Code24Filled,
  Color24Filled,
  Delete24Filled,
  DocumentPdf24Filled,
  Folder24Filled,
  FolderOpen24Filled,
  Games24Filled,
  Mail24Filled,
  Note24Filled,
  PaintBrush24Filled,
  Person24Filled,
  Stack24Filled,
} from '@fluentui/react-icons';

const systemIcons = {
  resume: DocumentPdf24Filled,
  about: Person24Filled,
  experience: Briefcase24Filled,
  projects: Folder24Filled,
  skills: Stack24Filled,
  certifications: Certificate24Filled,
  contact: Mail24Filled,
  explorer: FolderOpen24Filled,
  code: Code24Filled,
  games: Games24Filled,
  notes: Note24Filled,
  personalize: Color24Filled,
  paint: PaintBrush24Filled,
  recycle: Delete24Filled,
};

export default function AppGlyph({ id, meta, className }) {
  const Icon = systemIcons[id];
  const color = meta.color === '#ffffff' ? '#fff' : meta.color;

  if (Icon) {
    return <Icon className={className} style={{ color }} aria-hidden="true" />;
  }

  return <i className={`${meta.icon} ${className}`} style={{ color }} aria-hidden="true" />;
}