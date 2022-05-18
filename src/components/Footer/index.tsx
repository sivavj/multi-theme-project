import { Box, Card, styled, Typography } from '@mui/material'
import Link from 'components/Link'

const FooterWrapper = styled(Card)(
  ({ theme }) => `
        border-radius: 0;
        margin-top: ${theme.spacing(4)};
`,
)

function Footer() {
  return (
    <FooterWrapper className="footer-wrapper">
      <Box
        p={4}
        display={{ xs: 'block', md: 'flex' }}
        alignItems="center"
        textAlign={{ xs: 'center', md: 'left' }}
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="subtitle1">
            &copy; 2022 - TTM
          </Typography>
        </Box>
        <Typography
          sx={{
            pt: { xs: 2, md: 0 },
          }}
          variant="subtitle1"
        >
          Crafted by{' '}
          <Link
            href="https://enthutech.in"
            target="_blank"
            rel="noopener noreferrer"
          >
           enthutech.in
          </Link>
        </Typography>
      </Box>
    </FooterWrapper>
  )
}

export default Footer
