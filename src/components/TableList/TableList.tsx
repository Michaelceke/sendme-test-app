import React from "react";
import "./tableList.css";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
  Flex,
  Badge
} from "@chakra-ui/react";

const TableList = (props: any): JSX.Element => {
  return (
    // <Center>
      // <Box w="950px" p="60px">
        <Table variant="unstyled">
          <Thead>
            <Tr>
              <Flex align={"center"} justify="space-between">
                <Checkbox isInvalid={true} />
                <Th className="table-header">Order ID</Th>
                <Th className="table-header">Batch ID</Th>
                <Th isNumeric className="table-header">
                 No of Items
                </Th>
                <Th isNumeric className="table-header">
                  Status
                </Th>
                <Th isNumeric className="table-header">
                 Fulfilment Center
                </Th>
                <Th isNumeric className="table-header">
                  Amount
                </Th>
              </Flex>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Flex justify="space-between" align="center">
                <Checkbox isInvalid={true} />
                <Td className="table-data">inches</Td>
                <Td className="table-data">millimetres (mm)</Td>
                <Td isNumeric className="table-data">
                  25.4
                </Td>
                <Td className="table-data">millimetres (mm)</Td>
                <Td className="table-data"> <Badge colorScheme="green">Success</Badge></Td>
                <Td className="table-data">millimetres (mm)</Td>
              </Flex>
            </Tr>
            <Tr>
              <Flex justify="space-between" align="center">
                <Checkbox isInvalid={true} />
                <Td className="table-data">feet</Td>
                <Td className="table-data">centimetres (cm)</Td>
                <Td isNumeric className="table-data">
                  30.48
                </Td>
                <Td className="table-data">millimetres (mm)</Td>
                <Td className="table-data"> <Badge colorScheme="teal" style={{borderRadius:"10px"}} variant="subtle">Success</Badge></Td>
                <Td className="table-data">millimetres (mm)</Td>
              </Flex>
            </Tr>
            <Tr>
              <Flex justify="space-between" align="center">
                <Checkbox isInvalid={true} />
                <Td className="table-data">yards</Td>
                <Td className="table-data">metres (m)</Td>
                <Td isNumeric className="table-data">
                  0.91444
                </Td>
                <Td className="table-data">millimetres (mm)</Td>
                <Td className="table-data"> <Badge colorScheme="green">Success</Badge></Td>
                <Td className="table-data">millimetres (mm)</Td>
              </Flex>
            </Tr>
          </Tbody>
        </Table>
      // </Box>
    // </Center>
  );
};

export default TableList;
