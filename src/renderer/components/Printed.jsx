import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4',
      width:'100vh'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });

const Printed = ({itemToPrint}) => {
  console.log(itemToPrint)
  return (
    <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
       
      </View>
      
    </Page>
  </Document>
  )
}

export default Printed