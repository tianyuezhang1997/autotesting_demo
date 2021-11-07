name: push_to_main_branch
on: 
  push:
    branches:
      - main
jobs:
  build:
    name: Test the new push to main branch
    runs-on: windows-latest
    steps:
      - uses: actions/checkout@v2
      - if: always()
        uses: ouzi-dev/commit-status-updater@v1.1.0
        with:
          status: "${{ job.status }}"
      - name: Install TestCafe from 'npm' and Run Tests
        uses: DevExpress/testcafe-action@latest
        with:
          args: "chrome main_branch_test.js"
