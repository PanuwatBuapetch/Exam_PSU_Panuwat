import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';

export const MainLayout = ({ children }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    // Box นอกสุด: สีพื้นหลังเทาอ่อน + เต็มจอ
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f4f6f8' }}>
      
      {/* 1. Navbar: ติดขอบบน (Sticky) */}
      <AppBar position="sticky" elevation={0} sx={{ bgcolor: '#fff', borderBottom: '1px solid #e0e0e0' }}>
        {/* Container: บังคับให้เนื้อหาเมนูอยู่ตรงกลาง (lg = 1200px) */}
        <Container maxWidth="lg" sx={{ mx: 'auto' }}> 
          <Toolbar disableGutters sx={{ height: 64 }}>
            <Typography 
              variant="h6" 
              component={Link} 
              to="/"
              sx={{ 
                flexGrow: 1, 
                fontWeight: 'bold', 
                color: '#1976d2', 
                textDecoration: 'none', 
                display: 'flex', 
                alignItems: 'center',
                gap: 1
              }}
            >
              🏢 บริหารจัดการครุภัณฑ์ภายในหน่วยงาน  
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <MyButton 
                  variant={isActive('/') ? "contained" : "text"} 
                  color={isActive('/') ? "primary" : "inherit"}
                  startIcon={<DashboardIcon />}
                >
                  หน้าแดชบอร์ด
                </MyButton>
              </Link>
              <Link to="/assets" style={{ textDecoration: 'none' }}>
                <MyButton 
                  variant={isActive('/assets') ? "contained" : "text"} 
                  color={isActive('/assets') ? "primary" : "inherit"}
                  startIcon={<InventoryIcon />}
                >
                  ครุภัณฑ์
                </MyButton>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* 2. Content Body: เนื้อหาตรงกลาง */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, flexGrow: 1, mx: 'auto' }}>
        {children}
      </Container>

      {/* 3. Footer: ปิดท้ายสวยๆ */}
      <Box component="footer" sx={{ py: 3, bgcolor: '#fff', borderTop: '1px solid #e0e0e0', mt: 'auto' }}>
        <Container maxWidth="lg" sx={{ mx: 'auto' }}>
          <Typography variant="body2" color="text.secondary" align="center">
            © 2026 - จัดทำโดยนาย ภานุวัฒน์-บัวเพชร.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};