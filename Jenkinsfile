pipeline {
  agent any
  stages {
    stage('Angular Build') {
      agent {
        docker {
          image 'node:12.18-alpine'
          args '--mount type=bind,source=/home/ec2-user/deploy,target=/deploy'
        }

      }
      steps {
        sh '''cp dist/project-task-force/* /deploy


'''
      }
    }

    stage('Deploy to S3') {
      agent {
        docker {
          image 'amazon/aws-cli'
          args '--mount type=bind,source=/home/ec2-user/deploy,target=/deploy --interactive --entrypoint=""'
        }

      }
      steps {
        sh 'aws s3 cp /deploy s3://task-todo-angular-bucket --recursive --acl public-read'
      }
    }

  }
}