import { useEffect } from 'react';

const SITE = 'Cesar Restrepo';

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · ${SITE}` : `${SITE} · Analista QA y desarrollador web`;
  }, [title]);
}
