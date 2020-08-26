pipeline {
  agent any
  stages {
    stage('Angular Build') {
      agent {
        docker {
          image 'maven:3.6.3-adoptopenjdk-8'
        }

      }
      steps {
        sh 'mvn package'
      }
    }

  }
}