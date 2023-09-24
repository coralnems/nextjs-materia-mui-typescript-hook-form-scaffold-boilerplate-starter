import PinDropIcon from '@mui/icons-material/PinDrop';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

import PageFooter from '@/component/PageFooter';
import { SITE_CONFIG } from '@/constant';

export default function Homepage({ reactVersion = 'unknown' }) {
  return (
    <main>
      <section>
        <Box sx={{ textAlign: 'center' }}>
          <PinDropIcon />
          <Typography variant='h5' component='h1' gutterBottom>
            {SITE_CONFIG.title}
          </Typography>
          <Typography variant='subtitle2' gutterBottom>
            {SITE_CONFIG.description}
          </Typography>

          <Typography
            variant='subtitle1'
            gutterBottom
            sx={{ color: 'green', mt: 3 }}
          >
            Get data from api test: The latest React version is {reactVersion}
          </Typography>

          <Box sx={{ m: 5 }}>
            <Link
              href='https://github.com/AlexStack/nextjs-materia-mui-typescript-hook-form-scaffold-boilerplate-starter'
              target='_blank'
            >
              See the Github repository page
            </Link>
          </Box>
          <Box sx={{ m: 5 }}>
            <Link
              href='https://vercel.com/new/clone?s=https%3A%2F%2Fgithub.com%2FAlexStack%2Fnextjs-materia-mui-typescript-hook-form-scaffold-boilerplate-starter&showOptionalTeamCreation=false'
              target='_blank'
            >
              Click here to deploy a demo site to your Vercel in 1 minute
            </Link>
          </Box>
          <Box sx={{ m: 5 }}>
            <Link href='/test-page-not-exists'>Test 404 page not found</Link>
          </Box>
          <Box sx={{ m: 5 }}>
            <Link href='/?slug=testError500'>Test 500 error page</Link>
          </Box>
        </Box>
      </section>
      <PageFooter />
    </main>
  );
}
