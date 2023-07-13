import { useSelector } from 'react-redux';
import { Center, Box, Text, Image } from '@chakra-ui/react';

function Header() {
  const data = useSelector((state) => state.products);

  return (
    <>
      <Box mt={4} p={4} bg="white" boxShadow="lg">
        <Image  pl="140px"   m="2" src="https://www.selectcarleasing.co.uk/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcFJkIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--2ce22bfce45a43534699eb797a40e5c52b602e23/Elon%20Musk%20Earnings%20Calculator%20-%20800px%20(Header).jpg" alt="Elon Musk" />
        <Center bg="none">
          <Text bg="none" mt={5} fontSize={35} fontWeight={500}>
            Spend Elon Musk' Money
          </Text>
        </Center>
      </Box>
      <Box bg="orange.400" h={50} pos="sticky" top={-1} mt={3} zIndex={2}>
        <Text boxShadow="md" bg="orange.300" w="100%" textAlign="center" fontSize={40} fontWeight={500}>{`$${new Intl.NumberFormat('en-US').format(data.money)}`}</Text>
      </Box>
    </>
  );
}

export default Header;